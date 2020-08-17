import jspdf from 'jspdf';

const generateBill = () => {
    const doc = new jspdf('p', 'pt');
    doc.text(20, 20, 'This is default text!');
    doc.save('test.pdf');
}

export default generateBill;
