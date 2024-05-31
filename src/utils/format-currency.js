export const VNDFormatCurrency = (value) => {
    return value ? new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value) : 'Incorrect format';
}