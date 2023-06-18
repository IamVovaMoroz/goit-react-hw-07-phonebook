import { useEffect, useState } from "react";


// экспорт именнованный лучше, Обьявляем функцию записываем параметры и будем передавать аргумент. key - это ключ в localStorage. Будет приходить useLocalStorage("contacts", initialContacts);
export function useLocalStorage (key, initialState) {
    const [state, setState] = useState(
        // localStorage забираем item, по ключу, который мы передаем при вызове useLocalStorage, если item не существует передаем initialState
        ()=>JSON.parse(localStorage.getItem(key)) ?? initialState

    );
// при вызове этого эффекта нам нужно в LocalStorage сохранить(записать) state через setItem. При любом изменении state будет сохранять в локал через   localStorage.setItem(key, JSON.stringify(state))
    useEffect(()=> {
        localStorage.setItem(key, JSON.stringify(state))
 // чтобы не зациклить рендер компонента, не записывать много раз , делаем проверку при вызове setState. Т.к. запись в Local storage опять производит обновление компонента
//  получаем из localStorage JSON и state приводим в JSON. Если эти 2 ряда не равны, то setState добавляем . 
//  если значение в localStorage отличается от текущего состояния, то происходит обновление состояния с помощью setState
 if(localStorage.getItem(key) !== JSON.stringify(state)){
    setState(JSON.parse(localStorage.getItem(key)))
 }
//  при изменении key, state вызываем этот эффект useEffect
    }, [key, state])


// возвращаем массив, где state - текущее значение состояния, а setState - функция для обновления состояния.
  return [state, setState]
}
