const Balance = () => {
    const ctx = useContext(UserContext);
    const email = ctx.user.email;
    const [balance, setBalance] = useState(0);
  
    useEffect(() => {
      fetch(`/account/findOne/${email}`)
        .then((response) => response.json())
        .then((data) => setBalance(data.balance))
        .catch((err) => console.log('err:', err));
    }, [email]);
  
    return (
      <div>
        <h3>Your Current Balance</h3>
        <p>${balance}</p>
      </div>
    );
  };
  