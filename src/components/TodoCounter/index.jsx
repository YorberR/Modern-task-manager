import './TodoCounter.css';

function TodoCounter() {

    const getCurrentDate = () => {
        const today = new Date();
        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        };
        return today.toLocaleDateString('es-ES', options);
    };

    return (
        <div className="TodoCounter">
            <h1 className="TodoCounter-title">Modern Task Manager</h1>
            <p className="TodoCounter-date">{getCurrentDate()}</p>
        </div>
    );
}

export { TodoCounter };