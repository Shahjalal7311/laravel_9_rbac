<div class="col-lg-4 col-md-4">
    <div class="card ordertable">
        <div style="min-height: 498px;">
            <h4 class="card-title" style="float: left;">Top Sale by Quantity </h4>
            <div class="table-responsive">
                <table id="checkoutsTable" class="table table-bordered table-striped"  name="checkoutsTable">
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th class="total" style="text-align: center;">Quantity</th>

                        </tr>
                    </thead>
                    <tbody id="tbody">
                        <?php foreach ($saleByQuantity as $topSale) { ?>
                            <tr>
                                <td>{{$topSale->name}}</td>
                                <td class="total" style="text-align: center;">{{$topSale->sum}}</td>
                            </tr>
                            <?php } ?>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>