export default function Input({ children,onSelect }){
    return <p>
        <label>
            { children }
                <input type="text" onChange={onSelect}/>
        </label>
    </p>
}