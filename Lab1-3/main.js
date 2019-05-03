$(function(){
var $LEFT_SIDE = $('.leftSide');
var $RIGHT_SIDE = $('.rightSide');
var $ITEM = $(".template").html();
var $IT_IN_LIST=$('.templateRight').html();

$("#buttonAdd").click(function(){
    var title = $("#inputAddGood").val();
    title= $.trim(title);
    if(title.length>0) addItem(title);
});

function addItem(title){
    var $node = $($ITEM);
    var $nodeInList =$($IT_IN_LIST);
    var $nodeInListCopy=$($IT_IN_LIST);

    $node.find('.goodName').find('span').text(title);
    $node.css("display","block");

    $nodeInList.find('span').text(title);
    $nodeInList.addClass('bought');
    $nodeInListCopy.find('span').text(title);
    $nodeInListCopy.addClass('notBought');

    var counterVal=1;
    var $counter = $node.find('.plusMinButtons').find('.amount');
    $counter.text(counterVal);

    $node.find('.minusButton').click(function(){
        if(counterVal >1)  $counter.text(--counterVal);
    });

    $node.find('.plusButton').click(function(){
        $counter.text(++counterVal);
    });

    $node.find('.buyDel').find('.buy').click(function(){

    });

    $node.find('.goodName').click(function(){
        $(this).find('span').hide();
        $(this).find('.newName').css('display','inline-block').val(title).focus();
    });

    $node.find('.newName').focusout(function(){
       var newTitle=$(this).val();
        newTitle=$.trim(newTitle);
        if(newTitle.length > 0)  title=newTitle;
        $node.find('.goodName').find('span').text(title).show();
        $(this).css('display','none');
    });

    $node.find('.buyDel').find('.buy').click(function(){
        $node.fadeToggle(250,function(){
            $node.addClass('notBought').removeClass('bought');
            $nodeInListCopy.fadeIn(250);
            $nodeInList.fadeOut(250);
            $node.fadeToggle(250);
        });
    });

    $node.find('.buyDel').find('.notBuy').click(function(){
        $node.fadeToggle(250,function(){
            $node.addClass('bought').removeClass('notBought');
            $node.fadeToggle(250);
            $nodeInListCopy.fadeOut(250);
            $nodeInList.fadeIn(250);
        });
    });

    $node.find('.buyDel').find('.delete').click(function(){
        $node.fadeOut(250,function(){
            $node.remove();
        });
        $nodeInList.fadeOut(250,function(){
            $nodeInList.remove();
        });
    });

    $node.hide().appendTo($LEFT_SIDE).fadeIn();
    $nodeInList.hide().appendTo($RIGHT_SIDE.find('.allLeft')).fadeIn();
    $nodeInListCopy.hide().appendTo($RIGHT_SIDE.find('.allBought'));
}

addItem('манга');
addItem('данго');
addItem('рамен');
});