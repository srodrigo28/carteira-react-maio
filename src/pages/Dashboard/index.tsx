import ContentHeader from '../../components/ContentHeader'
import SelectInput from '../../components/SelectInput'
import { Container } from './styles'

const Dashboard: React.FC = () => {
    const options = [
        { value: '2023', label: '2023' },
        { value: '2022', label: '2022' },
        { value: '2021', label: '2021' },
        { value: '2020', label: '2020' }
    ]  
    return (
        <Container>
            <ContentHeader title='DashBoard' lineColor='pink'>
                <SelectInput options={options} />
            </ContentHeader>
        </Container>
    )
}

export default Dashboard