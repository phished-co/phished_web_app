import{firestore} from "./firebase"


const getUsers = async() => {
  const snapshot = await firestore.collection("users").get();
  snapshot.docs.forEach((doc) => console.log(doc.data()))
}

export{getUsers}



const setUsers = async(name) => {

  const snapshot = await firestore.collection("users").doc("Trever@gmail.com").set({
    name: name,
    program: "D3",
  })

}

export{setUsers}
