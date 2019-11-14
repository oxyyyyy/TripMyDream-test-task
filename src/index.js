import "normalize.css";
import "./scss/styles.scss";

const openModalBtn = document.getElementsByClassName("btn-open-modal")[0];
const feedback = document.getElementsByClassName("feedback")[0];
const feedbackReaction = document.querySelectorAll(".feedback__reaction-btn");
const feedbackTextarea = document.getElementsByClassName(
  "feedback__textarea"
)[0];
const feedbackTextareaContainer = document.getElementsByClassName(
  "feedback__textarea-container"
)[0];
const feedbackSubmit = document.getElementsByClassName(
  "feedback__reaction-submit"
)[0];
const thankyouTooltip = document.getElementsByClassName("tooltip--thankyou")[0];
const mobClose = document.getElementsByClassName(
  "feedback__panel-mobile-close"
)[0];

const toggleModalState = () => {
  openModalBtn.classList.toggle("active");
  feedback.classList.toggle("active");
};

const closeModal = () => {
  feedback.classList.remove("active");
  feedback.classList.remove("selected");
  openModalBtn.classList.remove("active");
  feedbackTextareaContainer.classList.remove("active");
  feedbackReaction.forEach(item => {
    item.classList.remove("active");
  });
};

const validateTextarea = () => {
  if (feedbackTextarea.value.length > 0) {
    feedbackSubmit.classList.remove("disabled");
  } else {
    feedbackSubmit.classList.add("disabled");
  }
};

const submitFeedback = () => {
  openModalBtn.classList.remove("active");
  feedback.classList.remove("active");
  feedbackTextareaContainer.classList.remove("active");
  feedbackTextarea.value = "";
  feedbackReaction.forEach(item => {
    item.classList.remove("active");
  });
  thankyouTooltip.classList.add("active");
  feedback.classList.remove("selected");
  setTimeout(() => {
    thankyouTooltip.classList.remove("active");
  }, 1500);
};

function setSelectedReaction() {
  feedback.classList.add("selected");
  feedbackReaction.forEach(item => {
    item.classList.remove("active");
  });
  feedbackSubmit.classList.add("disabled");
  this.classList.add("active");
  feedbackTextareaContainer.classList.add("active");
}

openModalBtn.addEventListener("click", toggleModalState);
mobClose.addEventListener("click", closeModal);
feedbackReaction.forEach(item => {
  item.addEventListener("click", setSelectedReaction);
});
feedbackTextarea.addEventListener("keyup", validateTextarea);
feedbackSubmit.addEventListener("click", submitFeedback);
