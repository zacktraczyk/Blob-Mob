import { initializeApp } from '@firebase/app'
import { collection, doc, getDoc, getFirestore, setDoc, updateDoc } from '@firebase/firestore'
import { FacebookAuthProvider, getAuth, GoogleAuthProvider, signInWithPopup } from '@firebase/auth'
import { game } from '@App'
import shop from '@Game/shop'
import { player } from '@Game/entities/player'

const {
  VITE_API_KEY,
  VITE_AUTH_DOMAIN,
  VITE_PROJECT_ID,
  VITE_STORAGE_BUCKET,
  VITE_MESSAGING_SENDER_ID,
  VITE_APP_ID,
} = import.meta.env

const firebaseConfig = {
  apiKey: VITE_API_KEY,
  authDomain: VITE_AUTH_DOMAIN,
  projectId: VITE_PROJECT_ID,
  storageBucket: VITE_STORAGE_BUCKET,
  messagingSenderId: VITE_MESSAGING_SENDER_ID,
  appId: VITE_APP_ID,
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)

export const getAccount = async () => {
  const uid = '' + auth?.currentUser?.uid
  if (uid === 'undefined') {
    return
  }

  const docRef = doc(db, 'players', uid)
  const docSnap = await getDoc(docRef)
  if (docSnap.exists()) {
    console.log(docSnap.data())
    const { coins, purchasedBodies, purchasedFaces, purchasedHats, playerAttrIdx, fit } =
      docSnap.data()

    game.coins = coins
    shop.purchasedBodies = purchasedBodies
    shop.purchasedFaces = purchasedFaces
    shop.purchasedHats = purchasedHats
    shop.purchasedStatsIdx = playerAttrIdx
    player.body = fit.body
    player.face = fit.face
    player.hat = fit.hat

    shop.syncPlayerStatsShop()
  } else {
    console.log('firebase: getAccount: Creating new user')
    await setDoc(docRef, {
      uid: uid,
      username: auth?.currentUser?.displayName,
      coins: game.coins,
      playerAttrIdx: shop.purchasedStatsIdx,
      purchasedBodies: shop.purchasedBodies,
      purchasedFaces: shop.purchasedFaces,
      purchasedHats: shop.purchasedHats,
      fit: {
        face: player.face,
        body: player.body,
        hat: player.hat,
      },
    })
    saveHighscore(game.highscore)
  }
}

export const updateAccount = async () => {
  const uid = '' + auth?.currentUser?.uid
  if (uid === 'undefined') {
    return
  }

  const docRef = doc(db, 'players', uid)
  await updateDoc(docRef, {
    coins: game.coins,
    playerAttrIdx: shop.purchasedStatsIdx,
    purchasedBodies: shop.purchasedBodies,
    purchasedFaces: shop.purchasedFaces,
    purchasedHats: shop.purchasedHats,
    fit: {
      face: player.face,
      body: player.body,
      hat: player.hat,
    },
  })
}

export const getHighscore = async () => {
  console.log('firebase: getHighscore: GETTING HIGHSCORE')

  const uid = '' + auth?.currentUser?.uid
  const docRef = doc(db, 'highscores', uid)
  const docSnap = await getDoc(docRef)
  if (docSnap.exists()) {
    console.log('firebase: getHighscore: Highscore exists:', docSnap.data().score)
    game.highscore = docSnap.data().score
  } else {
    console.error("firebase: getHighscore: couldn't retrieve highscore")
  }
}

export const saveHighscore = async (score: number) => {
  try {
    const uid = '' + auth?.currentUser?.uid
    const docRef = doc(db, 'highscores', uid)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
      console.log('Highscore exists')
      if (score > docSnap.data().score) {
        await updateDoc(docRef, {
          score: score,
        })
      } else {
        console.log('not a new highscore :/')
      }
    } else {
      const highscoresRef = collection(db, 'highscores')
      await setDoc(doc(highscoresRef, uid), {
        uid: uid,
        username: auth?.currentUser?.displayName,
        score: score,
      })
      console.log('Document written')
    }
  } catch (e) {
    console.error('Error adding document: ', e)
  }
}

export const signInGoogle = () => {
  const provider = new GoogleAuthProvider()

  signInWithPopup(auth, provider)
  getAccount()
}

export const signInFacebook = () => {
  const provider = new FacebookAuthProvider()

  signInWithPopup(auth, provider)
}

export const signOut = () => {
  auth.signOut()
  window.location.reload()
}
