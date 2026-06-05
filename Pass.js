// Admin login
const loginBtn = document.getElementById('loginBtn1');
const loginPass = document.getElementById('loginPass1');

if (loginBtn) {
    loginBtn.addEventListener('click', () => {
        const password = loginPass.value.trim();
        
        // ✅ Correct password check
        if (password === '001@Thuli_$Deshan:T1-M:T' || password === 'E001@U_M_R:Admin-M/T') {
            // Remove error state
            loginPass.classList.remove('error');
            loginPass.placeholder = 'Password';
            loginPass.value = '';
            showToast('✅ Login successful! Redirecting...');
            window.location.href = "My english Admin.html";
        } else {
            // ✅ Show error in input box
            loginPass.classList.add('error');
            loginPass.value = '';
            loginPass.placeholder = '❌ Invalid Password!';
            showToast('❌ Invalid password!', true);
        }
    });
    
    // Enter key support
    loginPass.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            loginBtn.click();
        }
    });
    
    // Remove error state when user starts typing
    loginPass.addEventListener('input', () => {
        loginPass.classList.remove('error');
        loginPass.placeholder = 'Password';
    });
    
    // Remove error on focus
    loginPass.addEventListener('focus', () => {
        loginPass.classList.remove('error');
        loginPass.placeholder = 'Password';
    });
}