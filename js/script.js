var loginform = $('#login'), signupform = $('#signup') , showSignUpForm = $('#showSignUpForm') , showSignInForm = $('#showSignInForm');

showSignInForm.on('click', function(e){ 
	loginform.show();
	signupform.hide();
});

showSignUpForm.on('click', function(fe){
	signupform.show();
	loginform.hide();
});


var createNew = $('#createNew'), applicationForm = $('#applicationForm'), closeForm = $('#closeForm');

closeForm.bind('click', closeApplicationForm);
createNew.bind('click', showApplicationForm);

function showApplicationForm()
{
	applicationForm.show();
	closeForm.show();
}

function closeApplicationForm()
{
	applicationForm.hide();
	closeForm.hide();
}