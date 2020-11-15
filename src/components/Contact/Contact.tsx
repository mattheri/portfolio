import React from 'react';
import { EmailForm } from './EmailForm';
import { saveAs } from 'file-saver';

export const Contact = () => {

    const handleFileDownload = () => saveAs("https://drive.google.com/file/d/15nN-4quXFNvC4z3-kRVgv_YwzM4EsOHC/view?usp=sharing", "Mathieu Theriault - Curriculum Vitae.pdf");
    

    return (
        <section className="contact-section">
            <div className="title">
                <h1>Me contacter</h1>
            </div>
            <EmailForm />
            <div className="description">
                Vous pouvez aussi télécharger mon curriculum vitae <a onClick={handleFileDownload} href="#">ici</a>
            </div>
        </section>
    );
}