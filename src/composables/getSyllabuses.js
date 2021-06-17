import { ref } from "vue";
import { projectFirestore } from "../firebase/config";

const getSyllabuses = () => {
    const syllabuses = ref([])
    const error = ref(null)

    const load = async () => {
        try {
            const res = await projectFirestore.collection('syllabuses').get()

            syllabuses.value = res.docs.map(doc => {
                return { ...doc.data(), id: doc.id }
            })
        } catch(err) {
            error.value = err.message
        }
    }

    return { syllabuses, error, load }
}

export default getSyllabuses