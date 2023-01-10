<div class="col-lg-4 col-md-4">
    <div class="card ordertable">
        <div style="min-height: 498px;">
            <h4 class="card-title" style="float: left;">Top Sale by Category </h4>
            <div class="table-responsive">
                <table id="checkoutsTable" class="table table-bordered table-striped"  name="checkoutsTable">
                    <thead>
                        <tr>
                            <th>Category Name</th>
                            <th style="text-align: right;">Amount</th>

                        </tr>
                    </thead>
                    <tbody id="tbody">
                        <?php foreach ($saleByCategory as $categorySale) { ?>
                            <tr>
                                <td>{{$categorySale->categoryName}}</td>
                                <td style="text-align: right;">{{$categorySale->sum}}</td>


                            </tr>
                        <?php } ?>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>