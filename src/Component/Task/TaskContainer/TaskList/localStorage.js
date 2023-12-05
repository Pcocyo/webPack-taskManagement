export function save(classObj){
    const stringifyClassObj = JSON.stringify(classObj)
    localStorage.setItem('tasksGroup',stringifyClassObj)
}
export function get(classObj){
    const storedObject = localStorage.getItem('tasksGroup');
    const deserializedObject = JSON.parse(storedObject);
    return deserializedObject
}