		function calculateEMI() {

			let principal = document.getElementById("principal").value;

			let interest = document.getElementById("interest").value;

			let tenure = document.getElementById("tenure").value;

			// Calculate monthly interest rate

			let monthlyInterestRate = interest / 1200;

			// Calculate monthly installment

			let monthlyInstallment = (principal * monthlyInterestRate) / (1 - (1 / Math.pow(1 + monthlyInterestRate, tenure)));

			// Initialize variables for the EMI table

			let remainingPrincipal = principal;

			let totalAmount = 0;

			// Create table rows for each EMI

			let emiTable = document.getElementById("emiTable");

			emiTable.innerHTML = "";

			for (let i = 1; i <= tenure; i++) {

				// Calculate interest and principal repaid for this installment

				let interestAmount = remainingPrincipal * monthlyInterestRate;

				let principalRepaid = monthlyInstallment - interestAmount;

				// Update remaining principal and total amount

				remainingPrincipal -= principalRepaid;

				totalAmount += monthlyInstallment;

				// Create table row for this EMI

				let row = emiTable.insertRow();

				let cell1 = row.insertCell();

				let cell2 = row.insertCell();

				let cell3 = row.insertCell();

				let cell4 = row.insertCell();

				let cell5 = row.insertCell();

				let cell6 = row.insertCell();

				cell1.innerHTML = i;

				cell2.innerHTML = monthlyInstallment.toFixed(2);

				cell3.innerHTML = interestAmount.toFixed(2);

				cell4.innerHTML = principalRepaid.toFixed(2);

				cell5.innerHTML = remainingPrincipal.toFixed(2);

				cell6.innerHTML = totalAmount.toFixed(2);

			}

		}

