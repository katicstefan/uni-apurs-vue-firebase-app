import { ref } from "vue"
import { projectFirestore } from "../../firebase/config"


const getProfessors = () => {
    const professors = ref([])
    const error = ref(null)

    const load = async () => {
        try {
            const res = await projectFirestore.collection('professors').get()

            professors.value = res.docs.map(doc => {
                return {...doc.data(), id: doc.id}
            })
        } catch(err) {
            error.value = err.message
        }
    }
    return { professors, error, load }
}

export default getProfessors