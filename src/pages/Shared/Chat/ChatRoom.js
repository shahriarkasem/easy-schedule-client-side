import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./ChatRoom.css";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/analytics";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import NotFound from "../NotFound";
import Loading from "../Loading";

firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
});

const auth = firebase.auth();
const firestore = firebase.firestore();
// const analytics = firebase.analytics();

const ChatApi = () => {
  const { email, name } = useParams();

  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <Loading></Loading>;
  }

  if (!email || !name || !user) {
    return <NotFound></NotFound>;
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center chat-main-container">
      {user && (
        <div className="border-4 my-5 md:my-10 rounded-lg">
          <ChatRoom />
        </div>
      )}
    </div>
  );
};

function ChatRoom() {
  const [user] = useAuthState(auth);
  const { email, name } = useParams();

  const dummy = useRef();
  const messagesRef = firestore.collection(`${user?.email}-messages`);
  const query = messagesRef.orderBy("createdAt");
  const messagesRef2 = firestore.collection(`${email}-messages`);
  const query2 = messagesRef2.orderBy("createdAt");

  const [messages] = useCollectionData(query, { idField: "id" });
  const [messages2] = useCollectionData(query2, { idField: "id" });

  const [userMessage, setUserMessage] = useState([]);

  useEffect(() => {
    let everySame = [];
    const querySnapshot = messages?.forEach((message) => {
      const same = email === message.receiver;
      const same2 = email === message.sender;
      if (same || same2) {
        everySame.push(message);
      }
      setUserMessage(everySame);
    });
  }, [messages]);

  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;
    const sender = user?.email;
    const receiver = email;

    setFormValue("");

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
      sender,
      receiver,
    });
    await messagesRef2.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
      sender,
      receiver,
    });

    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="max-w-lg flex justify-center flex-col chat-main-container-form">
        <div id="main-part">
          {/* {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)} */}
          {userMessage &&
            userMessage?.map((msg) => (
              <ChatMessage key={msg.id} message={msg} />
            ))}

          <span ref={dummy}></span>
        </div>

        <form onSubmit={sendMessage} className="w-full">
          <input
            value={formValue}
            onChange={(e) => setFormValue(e.target.value)}
            placeholder="Write your message..."
          />

          <button type="submit" disabled={!formValue}>
            Send
          </button>
        </form>
      </div>
    </>
  );
}

function ChatMessage(props) {
  const [user] = useAuthState(auth);
  const { text, uid, photoURL } = props.message;
  const { email, name } = useParams();

  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";

  const [firstLetterSender, setFirstLetterSender] = useState("");
  const [firstLetterReceiver, setFirstLetterReceiver] = useState("");

  useEffect(() => {
    const userNameFirstLetterSender = user?.displayName?.charAt(0);
    setFirstLetterSender(userNameFirstLetterSender);
    const userNameFirstLetterReceiver = name.charAt(0);
    setFirstLetterSender(userNameFirstLetterReceiver);
  }, [text]);

  return (
    <>
      <div>
        <div className={`message ${messageClass}`}>
          <img
            src={
              photoURL ||
              (props.message.receiver === email &&
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlB7JC2WGqdgPirrJq4iCse78c566bSMgo2Q&usqp=CAU") ||
              (props.message.receiver === user?.email &&
                "https://media.istockphoto.com/vectors/floral-seamless-pattern-flower-background-flourish-stripped-petals-vector-id587212846?k=20&m=587212846&s=612x612&w=0&h=G2wgGEEVY-vLjn6iIiUywY8_c9ROLHhY_K3WdP_Jq8o=")
            }
          />
          <p>{text}</p>
        </div>
      </div>
    </>
  );
}

export default ChatApi;
