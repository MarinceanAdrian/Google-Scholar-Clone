import { useContext } from 'react';
import Result from '../../Result/Result';
import { APIContext } from '../../../../context/APIContext';

import './MainFindings.scss';
const MainFindings = () => {
    const { results } = useContext(APIContext);

    return (
        <section className='findings__section'>
            {
                results.map((result: any) => (
                    <Result key={result.result_id} {...result} />
                ))
            }
        </section>
    )
}

export default MainFindings;