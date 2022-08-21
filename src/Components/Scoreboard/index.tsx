import { useCollectionData, useCollectionDataOnce } from "react-firebase-hooks/firestore";
import { useEffect, useState } from "react";
import { auth, db } from "../../apis/firebase";
import "./index.scss";
import { collection, DocumentData, FirestoreError, limit, orderBy, query } from "firebase/firestore";

const Scoreboard: React.FC = () => {
  const highscoresRef = collection(db, "highscores");
  const q = query(highscoresRef, orderBy("score", "desc"), limit(10));

  const [highscores, loading, error] = useCollectionData(q);

  if (loading) {
    return (
      <div className="scoreboard">
        <h2>Loading...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="scoreboard">
        <h2>Error: {"" + error}</h2>
      </div>
    );
  }

  return (
    <div className="scoreboard">
      <h2>Top Scores</h2>
      <ul>
        {highscores?.map((highscore, key) => (
          <li key={key}>
            <p className={getScoreClass(highscore.uid)}>{highscore.username}</p>
            <p className={getScoreClass(highscore.uid)}>{highscore.score}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const getScoreClass = (uid: string) => {
  return auth?.currentUser?.uid === `${uid}` ? "featured" : "norm";
};

export default Scoreboard;
