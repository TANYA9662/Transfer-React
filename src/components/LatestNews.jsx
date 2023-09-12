import React from 'react';
import './LatestNews.css';

const LatestNews = () => {
    const latestArticles = [
        {
            title: 'Inte klart med ersättare f?r Ribbenvik',
            summary: 'Regeringen och SD har ?nnu inte hittat någon ers?ttare för Migrationsverkets avg?ende generaldirektör Mikael Ribbenvik.',
            link: 'https://www.aftonbladet.se/nyheter/a/8JWWL2/inte-klart-med-ersattare-for-ribbenvik'
        },
        {
            title: 'Regionpolitiker: Mer stöd från staten behövs',
            summary: 'Regeringen beh?ver skjuta till pengar f?r att välfärden inte ska drabbas drastiskt.',
            link: 'https://www.aftonbladet.se/nyheter/a/y6XXyR/regionpolitiker-mer-stod-fran-staten-behovs'
        }
        // Add more articles here
    ];

    return (
        <div className="latest-news">
            <h2 className="latest-title">Senaste nytt</h2>
            {latestArticles.map((article) => (
                <div key={article.title} className="latest-article">
                    <h3>{article.title}</h3>
                    <p>{article.summary}</p>
                    <a href={article.link} target="_blank" rel="noopener noreferrer">
                        Läs mer
                    </a>
                </div>
            ))}
        </div>
    );
};

export default LatestNews;
