import {ContentHeader} from '../../components/ContentHeader'
import SelectInput from '../../components/SelectInput'
import { Container } from './styles'

export function Dashboard(){
    const options1 = [
        { value: '2023', label: '2023' },
        { value: '2022', label: '2022' }
    ]  
    const options2 = [
        { value: 'agosto', label: 'Agosto' },
        { value: 'setembro', label: 'Setembro' },
        { value: 'outubro', label: 'Outubro' },
        { value: 'novembro', label: 'Novembro' }
    ]  
    return (
        <Container>
            <ContentHeader title='DashBoard' lineColor='pink'>
                <SelectInput options={options1} />
                <SelectInput options={options2} />
            </ContentHeader>
        </Container>
    )
}