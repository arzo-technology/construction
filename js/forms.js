/* ============================================================
   FORM VALIDATION + SUBMISSION
   Works in demo mode by default. Set COMPANY.formEndpoint to
   connect Formspree / Formspark / similar service.
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  function showError(input, msg){
    input.classList.add('error');
    const group = input.closest('.form-group');
    let err = group.querySelector('.error-msg');
    if(!err){ err = document.createElement('div'); err.className = 'error-msg'; group.appendChild(err); }
    err.textContent = msg;
    err.classList.add('show');
  }
  function clearError(input){
    input.classList.remove('error');
    const group = input.closest('.form-group');
    const err = group?.querySelector('.error-msg');
    if(err) err.classList.remove('show');
  }

  function validateForm(form){
    let valid = true;
    form.querySelectorAll('[required]').forEach(input => {
      clearError(input);
      const v = (input.value || '').trim();
      if(!v){ showError(input, 'This field is required'); valid = false; return; }
      if(input.type === 'email' && !emailRe.test(v)){ showError(input, 'Please enter a valid email'); valid = false; return; }
      if(input.type === 'tel' && v.length < 6){ showError(input, 'Please enter a valid phone number'); valid = false; }
    });
    return valid;
  }

  function setLoading(btn, on){
    if(!btn) return;
    if(on){ btn.classList.add('btn-loading'); btn.dataset.label = btn.textContent; btn.textContent = 'Sending'; }
    else { btn.classList.remove('btn-loading'); if(btn.dataset.label) btn.textContent = btn.dataset.label; }
  }

  async function submitForm(form){
    const btn = form.querySelector('button[type="submit"]');
    const success = form.querySelector('.form-success');
    const errorBox = form.querySelector('.form-error-box');
    if(!validateForm(form)){
      if(errorBox){ errorBox.textContent = 'Please correct the errors above and try again.'; errorBox.classList.add('show'); }
      return;
    }
    if(errorBox) errorBox.classList.remove('show');
    setLoading(btn, true);

    const data = new FormData(form);
    const payload = Object.fromEntries(data.entries());

    try{
      if(COMPANY.formEndpoint){
        const res = await fetch(COMPANY.formEndpoint, {
          method:'POST',
          headers:{'Accept':'application/json'},
          body:data
        });
        if(!res.ok) throw new Error('Submission failed');
        if(success) { success.textContent = 'Thank you! Your message has been sent. We will be in touch shortly.'; success.classList.add('show'); }
        form.reset();
      } else {
        // Demo mode
        await new Promise(r => setTimeout(r, 900));
        if(success){
          success.innerHTML = `<strong>Demo Mode:</strong> This form is fully validated but is not connected to a backend. To receive real submissions, set <code>COMPANY.formEndpoint</code> in <code>js/configuration.js</code> to a Formspree / Formspark endpoint.`;
          success.classList.add('show');
        }
        form.reset();
        // Log so user sees what would have been sent
        console.log('[Demo submission]', payload);
      }
    }catch(err){
      if(errorBox){ errorBox.textContent = 'Something went wrong. Please try again or contact us directly.'; errorBox.classList.add('show'); }
    }finally{
      setLoading(btn, false);
    }
  }

  // Attach to all forms with class data-validate
  document.querySelectorAll('form[data-validate]').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      submitForm(form);
    });
  });

  // Live clear errors
  document.addEventListener('input', e => {
    if(e.target.matches('.form-control')) clearError(e.target);
  });
});