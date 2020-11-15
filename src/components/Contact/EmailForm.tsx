import React from 'react';
import { Input } from '../Input/Input';
import { init, send } from "emailjs-com";

export const EmailForm = () => {

    const [error, setError] = React.useState({
        name: {
            isError: false,
            msg: ""
        },
        email: {
            isError: false,
            msg: ""
        },
        text: {
            isError: false,
            msg: ""
        }
    });

    const [email, setEmail] = React.useState({
        name: "",
        email: "",
        text: ""
    });

    const [feedback, setFeedback] = React.useState("Envoyer");

    const handleSetEmail = (val: string, id: string) => {
        setEmail(prev => Object.assign({}, prev, { [id]: val }));
    }
    
    const handleSendEmail = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        send("portfolio_service", "template_portfolio", email)
            .then(response => {
                    setFeedback("Envoyé!");
                setTimeout(() => {
                    setFeedback("Envoyer");
                    setEmail({
                        name: "",
                        email: "",
                        text: ""
                    });
                }, 3000);
            }, error => {
                    setFeedback("Erreur");
                    setTimeout(() => setFeedback("Envoyer"), 3000);
            });
    }

    React.useEffect(() => {
        !email.email.includes("@") && email.email.length > 0 ?
            setError(prev => Object.assign({}, prev, prev["email"] = { isError: true, msg: "Vous devez inscrire une adresse email valide" })) :
            setError(prev => Object.assign({}, prev, prev["email"] = { isError: false, msg: "" }));
        email.text.match(/[<>]/g) && email.text.length > 0 ?
            setError(prev => Object.assign({}, prev, prev["text"] = { isError: true, msg: "Les caractères < et > ne sont pas permis" })) :
            setError(prev => Object.assign({}, prev, prev["text"] = { isError: false, msg: "" }));
        email.name.match(/[<>]/g) && email.name.length > 0 ?
            setError(prev => Object.assign({}, prev, prev["name"] = { isError: true, msg: "Les caractères < et > ne sont pas permis" })) :
            setError(prev => Object.assign({}, prev, prev["name"] = { isError: false, msg: "" }));
    }, [email]);

    React.useEffect(() => init("user_uuePwuoU0BvtlmpaFMGud"), []);
    
    return (
        <div className="email-section">
            <form>
                <div className="container">
                    <Input id="name" error={error.name} onChange={handleSetEmail} value={email.name} label="Nom" />
                    <Input id="email" error={error.email} onChange={handleSetEmail} value={email.email} label="Adresse email" />
                </div>
                <Input id="text" type="text-area" error={error.text} onChange={handleSetEmail} value={email.text} label="Message" />
                <button
                    onClick={handleSendEmail}
                    disabled={Object.entries(error).filter(([key, value]) => value.isError === true).length > 0 || Object.entries(email).filter(([key, value]) => value.length > 1).length < 3}
                    type="submit">{feedback}</button>
            </form>
        </div>
    );
}