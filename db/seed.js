import {db} from './firebase-config.js'
import {collection, addDoc} from 'firebase/firestore'
import products from '../src/utils/products.jsx'

const itemsCollectionRef = collection(db, 'items')

const promises = products.map((product) => addDoc(itemsCollectionRef, product))

Promise.all(promises).then(() => {
	process.exit(0)
})