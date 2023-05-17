import {
    MainSection,
    BoxContainerDiv,
    ContentContainerDiv,
    ImageContainerDiv,
    Overlay1Image,
    TitleAndParagraphContainerDiv,
    TitleH1Div,
    TitleH1,
    TitleSpan,
    ParagraphPDiv,
    ParagraphP,
    StatsContainerDiv,
    StatsDiv,
    StatsWords

} from './style';

export function StatsPreviewCard() {
    return (
        <>
            <MainSection>
                <BoxContainerDiv>
                    <ContentContainerDiv>
                        <TitleAndParagraphContainerDiv>
                            <TitleH1Div>
                                <TitleH1>Get <TitleSpan>insights</TitleSpan> that help your business grow.</TitleH1>
                            </TitleH1Div>
                            <ParagraphPDiv>
                                <ParagraphP>Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.</ParagraphP>
                            </ParagraphPDiv>
                            <StatsContainerDiv>
                                <StatsDiv>
                                    <h2>10k+</h2>
                                    <StatsWords>COMPANIES</StatsWords>
                                </StatsDiv>
                                <StatsDiv>
                                    <h2>314</h2>
                                    <StatsWords>TEMPLATES</StatsWords>
                                </StatsDiv>
                                <StatsDiv>
                                    <h2>12M+</h2>
                                    <StatsWords>QUERIES</StatsWords>
                                </StatsDiv>
                            </StatsContainerDiv>
                        </TitleAndParagraphContainerDiv>
                    </ContentContainerDiv>
                    <ImageContainerDiv>
                        <Overlay1Image />
                    </ImageContainerDiv>
                </BoxContainerDiv>
            </MainSection>
        </>
    );
}