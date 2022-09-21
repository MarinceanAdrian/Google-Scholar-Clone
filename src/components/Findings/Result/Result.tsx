import './Result.scss';
type ResultProps = {
    // id: number,
    result_id: number,
    cluster_id: number,
    title: string,
    snippet: string,
    citedByTotal: number,
    time_taken_displayed: number,
    total_results: number,
    total?: number | 0,
    link: string,
    type: string,
    authors: string,
}

const Result = (props: ResultProps) => {
    return (
        <article className="findings__section--item">
            {/* <span>{props.type ? props.type : ''}</span> */}
            <a href={props.link} className="findings__title" target='_blank' rel="noreferrer">{props.title}</a>
            <p className="findings__authors">{props.authors}</p>
            <p className="findings__abstract">{props.snippet}</p>
            <div className="findings__additional-info">
                <small>Cited by {props.citedByTotal}</small>
                <small>Versions {props.total}</small>
            </div>
        </ article>
    )
}

export default Result