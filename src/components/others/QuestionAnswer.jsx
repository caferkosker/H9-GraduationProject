const QuestionAnswer = (props) => {
  return (
    <div className="border-bottom mb-3">
      <dt>Soru: Bir ay içerisinde herhangi bir fiyat indirimi olacak mı?</dt>
      <dd>
        <p>
          <strong>A:</strong> Bilmiyorum ama umut edebilirim.
        </p>
        <div className="text-muted mb-2">By Cafer on 11 January, 2024</div>
        <div className="mb-2">
          <i>Bu cevap yardımcı oldu mu?</i>
          <button className="btn btn-sm btn-outline-success me-2 ms-2">
            <i className="bi bi-hand-thumbs-up-fill"></i>
          </button>
          <button className="btn btn-sm btn-outline-danger me-2">
            <i className="bi bi-hand-thumbs-down-fill"></i>
          </button>
        </div>
      </dd>
    </div>
  );
};

export default QuestionAnswer;
