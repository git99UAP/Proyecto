import { Component } from '@angular/core';

@Component({
  selector: 'app-payment-form',
  standalone: false,
  
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent {
  paymentInfo = {
    fullName: '',
    city: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    amount: 0,          // Nuevo campo de monto
    currency: 'USD'     // Nuevo campo de moneda (USD por defecto)
  };

  errorMessage: string | null = null;

  formatCardNumber() {
    this.paymentInfo.cardNumber = this.paymentInfo.cardNumber.replace(/\D/g, '');
    this.paymentInfo.cardNumber = this.paymentInfo.cardNumber.replace(/(\d{4})(?=\d)/g, '$1 ');
  }

  formatExpiryDate() {
    this.paymentInfo.expiryDate = this.paymentInfo.expiryDate.replace(/\D/g, '');
    if (this.paymentInfo.expiryDate.length >= 2) {
      this.paymentInfo.expiryDate = this.paymentInfo.expiryDate.substring(0, 2) + '/' + this.paymentInfo.expiryDate.substring(2, 4);
    }
  }

  onSubmit() {
    if (!this.paymentInfo.fullName || !this.paymentInfo.city || 
        !this.paymentInfo.cardNumber || !this.paymentInfo.expiryDate || 
        !this.paymentInfo.cvv || !this.paymentInfo.amount || !this.paymentInfo.currency) {
      this.errorMessage = 'Todos los campos son obligatorios.';
      return;
    }

    const cardNumberPattern = /^\d{4}\s?\d{4}\s?\d{4}\s?\d{4}$/;
    if (!cardNumberPattern.test(this.paymentInfo.cardNumber)) {
      this.errorMessage = 'El número de tarjeta debe tener 16 dígitos.';
      return;
    }

    const expiryDatePattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (!expiryDatePattern.test(this.paymentInfo.expiryDate)) {
      this.errorMessage = 'La fecha de expiración debe estar en formato MM/AA.';
      return;
    }

    const cvvPattern = /^\d{3}$/;
    if (!cvvPattern.test(this.paymentInfo.cvv)) {
      this.errorMessage = 'El código de seguridad debe tener 3 dígitos.';
      return;
    }

    this.errorMessage = null;
    console.log('Formulario enviado', this.paymentInfo);
    alert('Pago procesado con éxito');
  }

  printReceipt() {
    const receiptContent = document.getElementById('receipt');
    if (receiptContent) {
      const printWindow = window.open('', '', 'height=600,width=800');
      printWindow?.document.write(receiptContent.innerHTML);
      printWindow?.document.close();
      printWindow?.print();
    }
  }
}
