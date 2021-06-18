import { ref } from "vue";
import { projectFirestore } from "../../firebase/config";

const getSyllabuses = () => {
  const syllabuses = ref([])
  const error = ref(null)

  const load = async () => {
    try {
      await projectFirestore.collection('syllabuses')
        .orderBy('createdAt', 'desc')
        .onSnapshot(snap => {
          syllabuses.value = snap.docs.map(doc => {
            return { ...doc.data(), id: doc.id }
          })
        })
    } catch(err) {
        error.value = err.message
    }
  }

  return { syllabuses, error, load }
}

export default getSyllabuses