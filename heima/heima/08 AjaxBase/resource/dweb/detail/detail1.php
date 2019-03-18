<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>苹果</title>
	<style type="text/css">
	html,body,div,ul,img{padding:0;margin:0;}
	header{background: lightgreen;height: 50px;text-align: center;line-height: 50px;font:bold 24px/50px Arial;}
	nav{background: lightblue;height: 30px;line-height: 30px;padding-left: 180px;}
	section{background: lightyellow;}
	footer{background: lightgray;height: 50px;text-align: center;line-height: 50px;}
	#container{width:1010px;height:auto;margin:auto;background: #E2F9AA;padding-bottom: 10px;}
	#container img{margin:auto;display: block;padding-top: 10px;}
	#container p{margin:10px;}
	</style>
</head>
<body>
	<header>蔬菜水果网上超市</header>
	<nav>
		<a href="/dynamicweb/index.php">水果</a>
		<a href="/dynamicweb/index.php">蔬菜</a>
		<a href="/dynamicweb/index.php">干果</a>
	</nav>
	<section>

	    <?php 
	    $arr['banana'] = array('path' => 'img/banana2.jpg','content1' => '&nbsp;&nbsp;香蕉（学名1：Musa nana Lour.）芭蕉科芭蕉属植物，又指其果实。热带地区广泛栽培食用。香蕉味香、富含营养，终年可收获，在温带地区也很受重视。','content2' => '&nbsp;&nbsp;香蕉皮变黑其实是香蕉炭疽病的表现，因与人炭疽病症状相似而得名，病原菌是香蕉盘长孢，这种菌并不会对人体产生任何作用。这种症状只有在香蕉成熟时才会表现出来，表皮出现黑点说明香蕉已完全成熟，此时口感和风味最好。同时未成熟的香蕉中含有大量鞣酸，易导致便秘，成熟后鞣酸含量大大降低，因此表皮出现黑斑时是香蕉最佳食用时机。但当果肉也出现发黑、腐烂等现象时则不建议食用。');

	    $arr['apple'] = array('path' => 'img/apple2.jpg','content1'=>'&nbsp;&nbsp;烟台苹果于1871年由美国传教士引进，最早以青香蕉、红香蕉两个品种为主，以后又发展了小国光、金帅，改革开放以来引进了红富士、乔纳金等。','content2'=>'&nbsp;&nbsp;甜而闻名于世，历来为国内外市场所喜欢，是中国最重要的苹果产地。产地以烟台辖区内的栖霞、莱阳、莱西、龙口、招远、蓬莱、海阳、牟平、福山为主。其中烟台苹果的主产区是栖霞市、莱阳市、莱西市、莱州市，苹果个头大、皮薄，全区采用无公害套袋技术，山东栖霞市素有“胶东屋脊”之称，面积2017平方公里，主要地形为丘陵山地，有“六山一水三分田”之特点。这样的地理自然环境，非常适宜栽植苹果，栖霞人栽苹果的悠久历史有100多年。改革开放以来，栖霞加快产业结构调整，大力发展苹果产业，果园面积迅速增加到65万亩，年产苹果10亿公斤,成为支柱产业。栖霞因此享有“中国苹果之都"和“中国苹果第一市”之称。');

	    $arr['orange'] = array('path' => 'img/orange2.jpg','content1'=>'&nbsp;&nbsp;橘子原产地中国，数千年的栽培历史不能说清楚具体位置。由阿拉伯人传遍欧亚大陆，橘子至今在荷兰、德国都还被称为“中国苹果”。中国是橘子果的重要原产地之一，柑橘资源丰富，优良品种繁多，有4000多年的栽培历史。据考证，直到公元1471年，橘、柑、橙等柑橘类果树才从中国传入葡萄牙，公元1665年才传入美国。','content2'=>'&nbsp;&nbsp;橘子果树生长发育、开花结果与温度、日照、水分(湿度)、土壤以及风、海拔、地形和坡向等环境条件紧密相关，这些条件影响最大的数温度。即使差异0.5℃的气温有时会出现截然不同的结果。橘子果生长发育要求12.5～37℃的温度。秋季花芽分化要求昼夜温度分别为20℃左右和10℃左右，根系生长的土温与地上部大致相同。过低的温度会使橘子果受冻，甜橙-4℃，温州蜜柑-5℃时会使枝叶受冻，甜橙-5℃以下，温州蜜柑-6℃以下会冻伤大枝和枝干，甜橙-6.5℃以下，温州蜜柑-9℃以下会使植株冻死。');

	    $arr['pineapple'] = array('path' => 'img/pineapple2.jpg','content1'=>'&nbsp;&nbsp;菠萝原产于南美洲巴西、巴拉圭的亚马逊河流域一带，16世纪从巴西传入中国。 现在已经流传到整个热带地区。其可食部分主要由肉质增大之花序轴、螺旋状排列于外周的花组成，花通常不结实，宿存的花被裂片围成一空腔，腔内藏有萎缩的雄蕊和花柱。叶的纤维甚坚韧，可供织物、制绳、结网和造纸','content2'=>'&nbsp;&nbsp;凤梨与菠萝在生物学上是同一种水果，[2]  台湾称凤梨，大陆称菠萝。我国水果市场上，凤梨一般是指卡因种，多为进口，菠萝一般是指巴厘种，多为国产。不过在台湾，无论是卡因种还是巴厘种，都称为凤梨。巴厘种菠萝削皮后有“内刺”需要剔除；而卡因种凤梨消掉外皮后没有“内刺”，不需要用到划出一道道沟。论风味，巴厘种优于卡因种，但由于运输原因，进口凤梨只有卡因种。');

	    $arr['mango'] = array('path' => 'img/mango2.jpg','content1'=>'&nbsp;&nbsp;芒果是杧果（中国植物志）的通俗名（拉丁学名：Mangifera indica L.），芒果是一种原产印度的漆树科常绿大乔木，叶革质，互生；花小，杂性，黄色或淡黄色，成顶生的圆锥花序。核果大，压扁，长5-10厘米，宽3-4.5厘米，成熟时黄色，味甜，果核坚硬。','content2'=>'&nbsp;&nbsp;芒果为著名热带水果之一，芒果果实含有糖、蛋白质、粗纤维，芒果所含有的维生素A的前体胡萝卜素成分特别高，是所有水果中少见的。其次维生素C含量也不低。矿物质、蛋白质、脂肪、糖类等，也是其主要营养成分。可制果汁、果酱、罐头、腌渍、酸辣泡菜及芒果奶粉、蜜饯等。');
	    ?>

		<?php 
			$flag = $_GET['flag'];//banana
		?>
		<div id="container">
			<?php if($flag == 'banana') {?>
				<img src="<?php echo $arr['banana']['path'] ?>">
				<p><?php echo $arr['banana']['content1'] ?></p>
				<p><?php echo $arr['banana']['content2'] ?></p>
			<?php } else if($flag == 'apple'){?>
				<img src="<?php echo $arr['apple']['path'] ?>">
				<p><?php echo $arr['apple']['content1'] ?></p>
				<p><?php echo $arr['apple']['content2'] ?></p>
			<?php } else if($flag == 'orange'){?>
				<img src="<?php echo $arr['orange']['path'] ?>">
				<p><?php echo $arr['orange']['content1'] ?></p>
				<p><?php echo $arr['orange']['content2'] ?></p>
			<?php } else if($flag == 'pineapple'){?>
				<img src="<?php echo $arr['pineapple']['path'] ?>">
				<p><?php echo $arr['pineapple']['content1'] ?></p>
				<p><?php echo $arr['pineapple']['content2'] ?></p>
			<?php } else if($flag == 'mango'){?>
				<img src="<?php echo $arr['mango']['path'] ?>">
				<p><?php echo $arr['mango']['content1'] ?></p>
				<p><?php echo $arr['mango']['content2'] ?></p>
			<?php } ?>
		</div>
	</section>
	<footer>版权所有<a href="http://www.baidu.com">百度</a></footer>
</body>
</html>