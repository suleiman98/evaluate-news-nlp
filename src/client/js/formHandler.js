const { checkForUrl } = require("./urlChecker");

function handleSubmit(event) {
  event.preventDefault();

  let formText = document.getElementById("url").value;
  console.log("::: Form Submitted :::");

  if (checkForUrl(formText)) {
    console.log("valid url");

    fetch("http://localhost:8080/article", {
      method: "POST",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "text/plain",
      },
      body: formText,
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("res ui", res);

        document.querySelector("#score").innerHTML = `Polarity score: ${score(
          res.score_tag
        )}`;
        document.querySelector(
          "#subjectivity"
        ).innerHTML = `Subjectivity: ${letterCase(res.subjectivity)}`;
        document.querySelector(
          "#confidence"
        ).innerHTML = `Confidence: ${letterCase(res.confidence)}`;
        document.querySelector("#irony").innerHTML = `Irony: ${letterCase(
          res.irony
        )}`;
      });
  } else {
    console.log("invalid url");
  }
}

const letterCase = (word) => {
  return word.charAt(0) + word.slice(1).toLowerCase();
};

const score = (score_tag) => {
  if (score_tag === "P+" || score_tag === "P") {
    return "Positive";
  } else if (score_tag === "N+" || score_tag === "N") {
    return "Negative";
  } else if (score_tag === "NEU") {
    return "Neutral";
  } else {
    return "Non Sentimental";
  }
};

export { handleSubmit, score };
