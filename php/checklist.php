<?php session_start();

if(isset($_SESSION['username']))
{
    // get all values
}

?>
<!DOCTYPE html>
<html>
<head>
	<title>My Checklist</title>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <meta http-equiv="Content-Language" content="en" />
    <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=no;">
    <meta name="author" content="Umair Ahmad">
    <link type="text/css" rel="stylesheet" href="css/foundation.css">
    <link type="text/css" rel="stylesheet" href="css/login.css">
    <link type="text/css" rel="stylesheet" href="css/base.css">
    <link type="text/css" rel="stylesheet" href="css/header.css">
    <link type="text/css" rel="stylesheet" href="css/stage.css">
    <link type="text/css" rel="stylesheet" href="css/checklist.css">
</head>
<body>
    
	<div class="nav_bar noSelect">
		<div class="logo">
			<a href="index.html">
				<img alt="Logo" src="images/logo.jpg">
			</a>
		</div>
		<div class="page_title">
	        <ul class="header_menu">
                <li>My Checklist <span class="down_arrow">&#9660;</span>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="stage1.html">Behind on payments (Stage 1)</a></li>
                        <li><a href="stage2.html">90-day notice (Stage 2)</a></li>
                        <li><a href="stage3.html">I received a <b>Demand Letter</b> (Stage 3)</a></li>
                        <li><a href="stage4.html">I received a <b>Summons and Complaint</b> documents (Stage 4)</a></li>
                        <li><a href="stage5.html">I want to file an <b>Answer</b> or a <b>Notice of Appearance</b> (Stage 5)</a></li>
                        <li><a href="stage6.html"><b>The Settlement Conference</b> (Stage 6)</a></li>
                        <li><a href="stage7a.html">Successful <b>Settlement Conference</b> (Stage 7A)</a></li>
                        <li><a href="stage7b.html">Unsuccessful <b>Settlement Conference</b> (Stage 7B)</a></li>
                        <li><a href="stage8.html"><b>Post Judgement</b> (Stage 8)</a></li>
                        <li><a href="checklist.php">My Checklist</a></li>
                    </ul>
                </li>
            </ul>
		</div>
	</div>
	
	<div class="main">
        
        <div class="container cl_header">
            <h3>Documents to gather for the Settlement Conference</h3>
            <button class="btn cl_btn">Get my list</button>
        </div>

        <table class="cl_container noSelect">

            <tr>
                <td class="cb">
                    <input id="cb1" type="checkbox">
                </td>
                <td class="li_content"><label for="cb1">The last two months of pay stubs for everyone who regularly helps pay the mortgage</label></td>
            </tr>
            <tr>
                <td class="cb">
                    <input id="cb2" type="checkbox">
                </td>
                <td class="li_content"><label for="cb2">If you receive rental income: Copies of your current lease AND Schedule E in tax returns AND/OR Bank statements showing regular rental deposits AND/OR Copies of rent receipts you give to your tenants AND/OR Section 8 or other subsidy agreements</label></td>
            </tr>
            <tr>
                <td class="cb">
                    <input id="cb3" type="checkbox">
                </td>
                <td class="li_content"><label for="cb3">Tax returns for the last two years</label></td>
            </tr>
            <tr>
                <td class="cb">
                    <input id="cb4" type="checkbox">
                </td>
                <td class="li_content"><label for="cb4">If you receive money from the state (social security, disability payments, VA benefits etc) or a pension: Most recent award letter AND 3 months worth of bank statements showing deposits of this money OR 3 months worth of payment stubs</label></td>
            </tr>
            <tr>
                <td class="cb">
                    <input id="cb5" type="checkbox">
                </td>
                <td class="li_content"><label for="cb5">If you are self-employed you should have a profit and loss statement available for the last two quarters</label></td>
            </tr>
            <tr>
                <td class="cb">
                    <input id="cb6" type="checkbox">
                </td>
                <td class="li_content"><label for="cb6">If other people in your household are contributing to the household bills, copies of their paystubs/income documents</label></td>
            </tr>
            <tr>
                <td class="cb">
                    <input id="cb7" type="checkbox">
                </td>
                <td class="li_content"><label for="cb7">Your most recent utility bill that is listed in your name</label></td>
            </tr>
            <tr>
                <td class="cb">
                    <input id="cb8" type="checkbox">
                </td>
                <td class="li_content"><label for="cb8">Financial Form provided by the Bank</label></td>
            </tr>
            <tr>
                <td class="cb">
                    <input id="cb9" type="checkbox">
                </td>
                <td class="li_content"><label for="cb9">Hardship letter (This is a letter you write that explains why you fell behind. You should indicate in the letter if this was a temporary setback, or if this is a permanent change in your household income.)</label></td>
            </tr>
            <tr>
                <td class="cb">
                    <input id="cb10" type="checkbox">
                </td>
                <td class="li_content"><label for="cb10">Your most recent mortgage statement</label></td>
            </tr>
            <tr>
                <td class="cb">
                    <input id="cb11" type="checkbox">
                </td>
                <td class="li_content"><label for="cb11">Forbearance, loan modification, or workout offers you have received, regardless of whether you accepted or rejected them</label></td>
            </tr>
            <tr>
                <td class="cb">
                    <input id="cb12" type="checkbox">
                </td>
                <td class="li_content"><label for="cb12">All papers and letters you have received from the Court, the Bank, and the Bank’s attorney</label></td>
            </tr>
            <tr>
                <td class="cb">
                    <input id="cb13" type="checkbox">
                </td>
                <td class="li_content"><label for="cb13">Copies of your loan application (or the Uniform Residential Loan Application)</label></td>
            </tr>
            <tr>
                <td class="cb">
                    <input id="cb14" type="checkbox">
                </td>
                <td class="li_content"><label for="cb14">Your HUD-1 Settlement Statement</label></td>
            </tr>
            <tr>
                <td class="cb">
                    <input id="cb15" type="checkbox">
                </td>
                <td class="li_content"><label for="cb15">The Note and any riders (Balloon Rider or Adjustable Rate Rider)</label></td>
            </tr>
            <tr>
                <td class="cb">
                    <input id="cb16" type="checkbox">
                </td>
                <td class="li_content"><label for="cb16">Mortgage and riders</label></td>
            </tr>
            <tr>
                <td class="cb">
                    <input id="cb17" type="checkbox">
                </td>
                <td class="li_content"><label for="cb17">Truth-in-Lending Disclosure Statement</label></td>
            </tr>
            <tr>
                <td class="cb">
                    <input id="cb18" type="checkbox">
                </td>
                <td class="li_content"><label for="cb18">Good Faith Estimate</label></td>
            </tr>
            <tr>
                <td class="cb">
                    <input id="cb19" type="checkbox">
                </td>
                <td class="li_content"><label for="cb19">Your Deed</label></td>
            </tr>
            <tr>
                <td class="cb">
                    <input id="cb20" type="checkbox">
                </td>
                <td class="li_content"><label for="cb20">Most recent appraisal (if you have one)</label></td>
            </tr>
            <tr>
                <td class="cb">
                    <input id="cb21" type="checkbox">
                </td>
                <td class="li_content"><label for="cb21">Any other papers related to fees you paid at closing, either to your lender or your broker or anyone else</label></td>
            </tr>

        </table>

    </div>

    <script type="text/javascript" src="js/jquery-1.10.2.min.js"></script>
    <script type="text/javascript" src="js/checklist.js"></script>
</body>
</html>