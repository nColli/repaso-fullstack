const Notification = ({ message, messageIsError }) => {

    if (message === null) { return null }

    const notificationStyle = {
        color: 'green',
        backgroundColor: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    }

    if (messageIsError) {
        notificationStyle[color] = 'red'
    }

    return (
        <div style={notificationStyle}>
            {message}
        </div>
    )
}

export default Notification