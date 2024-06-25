

export default function Article({ info }) {
    return (
        <div>
            <main>
                <section>
                    <article className="blog">
                        <time className={info.datetime}>{info.datetime}</time>
                        <h2>{info.title}</h2>
                        <img src={info.image} alt={info.imageAlt} />
                        <p>{info.body}</p>
                        <div className="continues">
                            <h5>Continues ...</h5>
                        </div>
                    </article>
                </section>
            </main>
        </div>
    )
}



