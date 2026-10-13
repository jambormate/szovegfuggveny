import { useState } from 'react'

function SzovegKezeloFuggvenyek() {
    const [inputText, setInputText] = useState('')
    const [displayText, setDisplayText] = useState('')

    function handleInputChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
        const value = event.target.value
        setInputText(value)
        setDisplayText(value)
    }

    function resetText() {
        setInputText('')
        setDisplayText('')
    }

    return (
        <>
            <section className="card border-0">
                <div className="card-body">
                    <div className="mb-4">
                        <h2 className="h5">Írd be a szöveget</h2>
                    </div>
                    <textarea
                        id="text-input"
                        className="form-control"
                        value={inputText}
                        onChange={handleInputChange}
                        placeholder="Mi lesz a szöveg?"
                        rows={4}
                    />

                    <p className="form-text">{inputText.length > 0 ? `A beírt karakterek száma: ${inputText.length}` : 'Még nem írt be egyetlen karaktert sem.'}</p>

                    <div className="d-flex">
                        <button
                            className="btn btn-primary"
                            type="button"
                            onClick={() => setDisplayText(displayText.toUpperCase())}
                            disabled={displayText.length === 0}
                        >
                            Nagybetűs
                        </button>
                        <button
                            className="btn btn-outline-primary"
                            type="button"
                            onClick={() => setDisplayText(displayText.toLowerCase())}
                            disabled={displayText.length === 0}
                        >
                            Kisbetűs
                        </button>
                        <button
                            className="btn btn-light"
                            type="button"
                            onClick={resetText}
                        >
                            Visszaállít
                        </button>
                    </div>

                    <div>
                        <div className="d-flex align-items-center">
                            <h3 className="text-secondary">
                                Végeredmény
                            </h3>
                        </div>
                        <p>{displayText}</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SzovegKezeloFuggvenyek