import internet_computer_tutorial from 'ic:canisters/internet_computer_tutorial';

internet_computer_tutorial.greet(window.prompt("Enter your AMAZING name:")).then(greeting => {
  window.alert(greeting);
});
