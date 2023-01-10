<?php
    use APP\Product;
?>
<div class="col-lg-4 col-md-4">
    <div class="card" style="overflow:scroll; height:441px;">
        <div>
            <div class="d-flex" style="margin-bottom: 10px;">
                <div style="margin-top: 8px;">
                    <h5 class="card-title" style="margin-left: 10px;"> Sales Overview</h5>
                </div>
                <div class="ml-auto" style="margin-top: 3px; margin-right: 7px;">
                    <select class="form-control b-0" id="month">
                        <option 
                            <?php if(date('m') == 01){echo "selected";} ?> value="1"
                        >January
                        </option>

                        <option 
                            <?php if(date('m') == 02){echo "selected";} ?> value="2"
                        >February
                        </option>

                        <option 
                        <?php if(date('m') == 03){echo "selected";} ?> value="3"
                        >March
                        </option>

                        <option 
                        <?php if(date('m') == 04){echo "selected";} ?> value="4"
                        >April
                        </option>

                        <option 
                        <?php if(date('m') == 05){echo "selected";} ?> value="5"
                        >May
                        </option>

                        <option 
                        <?php if(date('m') == 06){echo "selected";} ?> value="6"
                        >Jun
                        </option>

                        <option 
                        <?php if(date('m') == 07){echo "selected";} ?> value="7"
                        >July
                        </option>

                        <option 
                        <?php if(date('m') == 8){echo "selected";} ?> value="8"
                        >August
                        </option>

                        <option 
                        <?php if(date('m') == 9){echo "selected";} ?>  value="9"
                        >September
                        </option>

                        <option 
                        <?php if(date('m') == 10){echo "selected";} ?> value="10"
                        >October
                        </option>

                        <option 
                        <?php if(date('m') == 11){echo "selected";} ?> value="11"
                        >November
                        </option>

                        <option 
                        <?php if(date('m') == 12){echo "selected";} ?> value="12"
                        >December
                        </option>
                    </select>
                </div>
            </div>
        </div>

        <div class=" bg-light">
            <div class="row">
                <div class="col-6">
                    <h4 style="margin-left: 10px;"><span class="monthName"><?php echo date('F') ?></span> <?php echo date('Y'); ?></h4 style="margin-left: 10px;">
                </div>
            <div class="col-6 align-self-center display-6 text-right">
                <h4 class="text-success monthlyIncome" style="margin-right: 8px;">{{$monthlyIncome}} BDT</h4>
            </div>
            </div>
        </div>
        <div class="">
            <table class="table table-hover no-wrap">
                <thead>
                    <tr>
                        <th width="71%">Product Name</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody id="monthly-sales">
                    <?php foreach ($salesbymonth as $monthlySale) {
                        $products = Product::where('id',$monthlySale->product_id)->first();

                        ?>
                        <tr>
                            <td class="txt-oflo" width="71%">{{@$products->name}}</td>
                            <td><span class="text-success">{{@$monthlySale->sum}} BDT</span></td>

                        </tr>
                        <?php } ?>          

                </tbody>
             </table>
        </div>
    </div>
</div>
