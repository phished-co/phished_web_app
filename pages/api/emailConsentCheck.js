import { db } from '../../firebaseConfig';

import {
    collection,
    doc,
    addDoc,
    getDoc,
    getDocs,
    updateDoc,
    deleteDoc,
    setDoc,
    query,
    where,
} from 'firebase/firestore';



export default async function handler(req, res) {
    const {method} = req
    switch (method) {
        
        case 'GET':

            //PLACE HOLDERS: subtitude the code with commented ones.
            let consentCreator = req.query.creator
            // let consentCreator = "yaasminaa77@gmail.com"  // req.query.creator
            let consentTarget = req.query.to
            // let consentTarget = "email@fake.com"  //req.query.to
            let consentExist = false

            const consentedEmailDocRef = query(collection(db, 'consentRequest'), where('creatorEmail', '==', consentCreator), where('to', '==', consentTarget), where('consent', '==', true));
            const querySnapshot = await getDocs(consentedEmailDocRef);
            querySnapshot.forEach((doc) => {
                consentExist = true
                // console.log(doc.id, " => ", doc.data());
            });

            res.send(consentExist)

            break
        default:
            res.setHeader('Allow', ['POST'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}
