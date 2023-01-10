<div class="col-lg-4 col-md-4">
    <div class="card ordertable">
       <div style="min-height: 498px;">
        <h4 class="card-title" style="float: left;">Top Sale by Amount </h4>
            <div class="table-responsive">
                <table id="checkoutsTable" class="table table-bordered table-striped"  name="checkoutsTable">
                    <thead>
                        <tr>
                            <th class="name">Product Name</th>
                            <th class="total" style="text-align: right;">Amount</th>

                        </tr>
                    </thead>
                    <tbody id="tbody">
                        <?php foreach ($saleByAmount as $topSale) {?>
                            <tr>
                                <td class="name">{{$topSale->name}}</td>
                                <td class="total" style="text-align: right;">{{$topSale->sum}}</td>


                            </tr>
                        <?php } ?>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>