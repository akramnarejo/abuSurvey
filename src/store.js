import { create } from "zustand";
import { persist } from "zustand/middleware";
import { collection, getDocs, doc, deleteDoc, updateDoc } from "firebase/firestore";
let useStore = (set, get) => ({
  surveys: [],
  files: [],
  offlineSurveys: [],
  loading: false,
  userInfo: {
    isAdmin: false,
    name: "",
    email: "",
    isAuthenticated: false,
  },
  users: [],
  loadSurveys: false,
  pendingSurveys: [],
  notify: { open: false, message: '', type: '' },
  setNotify: (props) => set(() => ({notify: props})),
  setPendingSurvey: (data) => set(() => [...get()?.pendingSurveys, data]),
  setLoadSurveys: () => set(() => ({ loadSurveys: !get()?.loadSurveys })),
  setLoading: (props) => set(() => ({ loading: props })),
  getSurveys: (data) => set(() => ({ surveys: data })),
  setOfflineSurveys: data => set(() => ({offlineSurveys: get().offlineSurveys.concat(data)})),
  clearOfflineSurveys: data => set(() => ({offlineSurveys: data})),
  setUserInfo: (data) =>
    set(() => ({ userInfo: { ...get()?.userInfo, ...data } })),
  getUsers: async (db) => {
    set(() => ({loading: true}))
    const data = await getDocs(collection(db, 'users'));
    
    const usersFetched = []
    for(let i = 0; i < data?.docs?.length; i++){
      const document = data?.docs?.[i]?._document?.data?.value?.mapValue?.fields
      const user = {
        address: document?.address?.stringValue,
        email: document?.email?.stringValue,
        firstName: document?.firstName?.stringValue,
        lastName: document?.lastName?.stringValue,
        lga: document?.lga?.stringValue,
        organization: document?.organization?.stringValue,
        reservedOrg: document?.reservedOrg?.stringValue,
        postalCode: document?.postalCode?.stringValue,
        ward: document?.ward?.stringValue,
        role: document?.role?.stringValue,
        state: document?.state?.stringValue,
        status: document?.status?.stringValue,
        uid: document?.uid?.stringValue,
        _id: data?.docs?.[i]?.id,
      }
      usersFetched.push(user)
    }
    set(() => ({users: usersFetched}))
    return data;
    // set(() => {})
  },
  fetchFiles: async (db) => {
    set(() => ({loading: true}))
    const data = await getDocs(collection(db, 'files'));
    
    const filesFetched = []
    for(let i = 0; i < data?.docs?.length; i++){
      const document = data?.docs?.[i]?._document?.data?.value?.mapValue?.fields
      const file = {
        name: document?.name?.stringValue,
        createdBy: document?.createdBy?.stringValue,
        organization: document?.organization?.stringValue,
        reservedOrg: document?.reservedOrg?.stringValue,
        url: document?.url?.stringValue,
      }
      filesFetched.push(file)
    }
    set(() => ({files: filesFetched}))
    return data;
    // set(() => {})
  },
  setFiles: file => set(() => ({files: [...get()?.files, file]})),
  fetchUsers: async (db) => {
    const data = await getDocs(collection(db, "users"));
    return data;
  },

  fetchSurveys: async (db) => {
    get().setLoading(true)
    const data = await getDocs(collection(db, 'surveys'));
    return data;
  },

  deleteUser: async (db, document, uid) => {
    set(() => ({loading: true}))
    set(() => ({users: get()?.users?.filter(user => user?.uid !== uid)}))
    await deleteDoc(doc(db, 'users', document));
    return;
  },

  deleteSurvey: async (db, id) => {
    set(() => ({ loading: true }));
    // Update local state to remove the deleted survey
    set(() => ({surveys: get()?.surveys?.filter(survey => survey?.id !== id)}))
    
    await deleteDoc(doc(db, 'surveys', id));
    set(() => ({ loading: false }));
  },

  updateUser: async (db, document, data) => {
    set(() => ({loading: true}))
    await updateDoc(doc(db, 'users', document), data);
    return;
  },

});

useStore = persist(useStore, {
  name: "Survey",
  getStorage: () => localStorage,
});

useStore = create(useStore);

export { useStore };
