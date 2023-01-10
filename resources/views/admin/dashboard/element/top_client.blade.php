<div class="col-lg-4 col-md-4">
    <div class="card ordertable">
     <div style="min-height: 441px;">
        <h4 class="card-title" style="float: left;">Top Client </h4>
            <div class="table-responsive">
                <table id="checkoutsTable" class="table table-bordered table-striped"  name="checkoutsTable">
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th style="text-align: right;">Amount</th>

                        </tr>
                    </thead>
                    <tbody id="tbody">
                        <?php
                        foreach ($topclients as $customer) {

                            ?>
                            <tr>
                                <td>{{$customer->name}}</td>
                                <td style="text-align: right;">{{$customer->sum}}</td>

                                <?php } ?>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>