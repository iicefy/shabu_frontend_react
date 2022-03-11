import { cloneElement } from "react"
import AuthProvider from "context/AuthContext"
import DisplayProvider from 'context/DisplayContext';

function ProviderComposer({ contexts, children }) {
    return contexts.reduce(
        (kids, parent) =>
            cloneElement(parent, {
                children: kids
            }),
        children
    )
}
export default function ContextProvider({ children }) {
    return (
        <ProviderComposer
            contexts={[<AuthProvider />, <DisplayProvider />]}
        >
            {children}
        </ProviderComposer>
    )
}