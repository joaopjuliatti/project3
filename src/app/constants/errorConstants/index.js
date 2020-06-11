module.exports = {
  notFound: (instance = null) => `${instance} not found`,
  notAuthorized: 'Not authorized',
  iugu: {
    useInvoiceIdOrIuguId: 'In order to duplicate an invoice, please pass iuguId or InvoiceId of the invoice as parameters'
  },
  creditRequest: {
    IdMissing: 'In order to create a new invoice, please pass CreditRequestId as parameters'
  },
  flowErrors: {
    notFound: 'A new flow must be passed as argument, the new flow must be an array of objects',
    invalidStructure: `The new flow Object should contain the following properties: InstallmentId, InvoiceId, dueDate, paymentValue, discount, proviPenalty.`,
    invalidFormat: `The flow should be an array of objects`,
    invalidIds: ({ IdName, invalidArray }) => `The ${IdName}(s): ${invalidArray} have no relation with this CreditRequestId`,
    invalidFlowValue: ({ currentFlowAmount, newFlowAmount }) =>
      `PaymentValue total invalid.The total value of the installments is R$ ${currentFlowAmount}, the total value of the flow you passed is R$ ${newFlowAmount}`,
    missingIds: ({ IdName, missingArray }) => `The flow you submitted is missing the ${IdName}(s): ${missingArray}`,
    invalidInstallment: ({ InstallmentId, diff }) =>
      `The flow you submitted have a difference of R$ ${diff} for the Installment(s) with the id ${InstallmentId}`,
    invalidInvoices: diff =>
      `The flow you submitted have a difference of R$ ${diff} for the for the total value of the invoices`
  }
}
