const formatCurrency = (current: number): string => {
    return current.toLocaleString(
        'pt-br',
        {
            style: 'currency',
            currency: 'BRL'
        });
};
export default formatCurrency;
/**
<p>
    {new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
    }).format(summary.deposits)}
</p>
 */