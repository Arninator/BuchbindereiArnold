const tabs = ['bucheinbaende', 'restaurierungen', 'objekte', 'papiere', 'faltarbeiten'];
const sectionLimits = [22, 16, 8, 19, 12];

class DetailPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return(
            <section className="detail-section">
                {sectionLimits[0].map(number => {
                    return <Dots />
                })}
                <Preview />
            </section>
        )
    }
}
const Dots = () => {
    return(
        <
    )
}