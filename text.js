$("#q_00.search_contents").on("click", function () {
  //処理内容
  $("#q_00").closest("div").css("display", "none");
  $("#q_01").closest("div").css("display", "block");
});

$("#q_01.next_btn").on("click", function () {
  //処理内容
  $("#q_01").closest("div").css("display", "none");
  $("#q_02").closest("div").css("display", "block");
})

$("#q_02.yesorno").on("click", function () {
  //処理内容
  $("#q_02").closest("div").css("display", "none");
  $("#q_03").closest("div").css("display", "block");
})

$("#q_03.yesorno").on("click", function () {
  //処理内容
  $("#q_03").closest("div").css("display", "none");
  $("#q_04").closest("div").css("display", "block");
})

$("#q_04.yesorno").on("click", function () {
  //処理内容
  $("#q_04").closest("div").css("display", "none");
  $("#q_05").closest("div").css("display", "block");
})

$("#q_05.yesorno").on("click", function () {
  //処理内容
  $("#q_05").closest("div").css("display", "none");
  $("#q_06").closest("div").css("display", "block");
})


$('.end').on('click', function () {
  console.log(box);
  // endクラスをクリックした時の関数
  if (value == a) {
    $(".random").attr('src', "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c21pbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60");
  } else if (value == b) {
    $(".random").attr('src', "");
}})


const images = [
  'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c21pbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c21pbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1599566219227-2efe0c9b7f5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c21pbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
];
var randImg = images[Math.floor(Math.random() * images.length)];
$('.random').attr('src', randImg);