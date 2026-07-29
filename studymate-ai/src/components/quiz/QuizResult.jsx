<div className="rounded-3xl bg-white p-10 shadow">

<h1 className="text-4xl font-bold">

🎉 Quiz Complete

</h1>

<h2 className="mt-8 text-6xl font-bold text-blue-600">

{score}

/

{quizData.length}

</h2>

<p className="mt-4 text-xl">

You answered

{" "}

{score}

{" "}

questions correctly.

</p>

<button

className="mt-10 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white"

onClick={()=>window.location.reload()}

>

Try Again

</button>

</div>