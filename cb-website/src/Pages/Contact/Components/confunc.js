// Page/Contact/components/confunc.js

export const handleSubmit = async (event, setLoading, setSuccess) => {
  event.preventDefault();
  setLoading(true);
  setSuccess(false);

  const formData = new FormData(event.target);
  formData.append("access_key", "3e7e862f-fcfd-4d74-8f03-c31b82ea2104");
  const json = JSON.stringify(Object.fromEntries(formData));

  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: json,
    }).then((r) => r.json());

    if (res.success) {
      setSuccess(true);
      event.target.reset();
    }
  } catch {
    setSuccess(false);
  }
  setLoading(false);
};
