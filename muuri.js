var itemContainers = [].slice.call(document.querySelectorAll('.board-column-content-drag'));
var columnGrids = [];
var boardGrid;
// Define the column grids so we can drag those
// items around.
itemContainers.forEach(function (container) {

  // Instantiate column grid.
  var grid = new Muuri(container, {
    items: '.board-item',
    layoutDuration: 400,
    layoutEasing: 'ease',
    dragEnabled: true,
    dragSort: function () {
      return columnGrids;
    },
    dragSortInterval: 0,
    dragContainer: document.body,
    dragReleaseDuration: 400,
    dragReleaseEasing: 'ease'
  })
  .on('dragStart', function (item) {
    // Let's set fixed widht/height to the dragged item
    // so that it does not stretch unwillingly when
    // it's appended to the document body for the
    // duration of the drag.
    item.getElement().style.width = item.getWidth() + 'px';
    item.getElement().style.height = item.getHeight() + 'px';
  })
  .on('dragReleaseEnd', function (item) {
    // Let's remove the fixed width/height from the
    // dragged item now that it is back in a grid
    // column and can freely adjust to it's
    // surroundings.
    item.getElement().style.width = '';
    item.getElement().style.height = '';
    // Just in case, let's refresh the dimensions of all items
    // in case dragging the item caused some other items to
    // be different size.
    columnGrids.forEach(function (grid) {
      grid.refreshItems();
    });
  })
  .on('layoutStart', function () {
    // Let's keep the board grid up to date with the
    // dimensions changes of column grids.
    boardGrid.refreshItems().layout();
  });

  // Add the column grid reference to the column grids
  // array, so we can access it later on.
  columnGrids.push(grid);

});

// Instantiate the board grid so we can drag those
// columns around.
boardGrid = new Muuri('.board', {
  layoutDuration: 400,
  layoutEasing: 'ease',
  dragEnabled: false,
  dragSortInterval: 0,
  dragStartPredicate: {
    handle: '.board-column-header'
  },
  dragReleaseDuration: 400,
  dragReleaseEasing: 'ease'
});

function displayItem(url, name) {
    let item = $("<div>").addClass("board-item").attr("data-name", name);
    let content = $("<div>").addClass("board-item-content");
    let card = $("<div>").addClass("card");
    let imageContainer = $("<div>").addClass("card-image");
    let image = $("<img>").attr("src", url).addClass("item-image");
    let cardContent = $("<div>").addClass("card-content");
    let title = $("<p>").text(name).addClass("card-text");
    
    imageContainer.append(image);
    cardContent.append(title)
    card.append(imageContainer).append(cardContent);
    item.append(content.append(card));
    columnGrids[0].add(item.get());
    $("#pantry").append(item);

    // <div class="card">
    //     <div class="card-image">
    //       <img src="images/sample-1.jpg">
    //       <span class="card-title">Card Title</span>
    //     </div>
    //     <div class="card-content">
    //       <p>I am a very simple card. I am good at containing small bits of information.
    //       I am convenient because I require little markup to use effectively.</p>
    //     </div>
    //     <div class="card-action">
    //       <a href="#">This is a link</a>
    //     </div>
    //   </div>
}